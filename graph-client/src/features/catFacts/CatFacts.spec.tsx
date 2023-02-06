import { render, fireEvent, screen } from '@testing-library/react';
import CatFacts from './CatFacts';
import * as ReactQuery from '@tanstack/react-query';
import * as UseCatFactQueryService from './useCatFactQueryService';

jest.mock('@tanstack/react-query');
jest.mock('./useCatFactQueryService');

const fakeInvalidate = jest.fn();

interface TestParams {
  length: number;
  fact: string;
}

const defaultParams: TestParams = {
  length: 20,
  fact: 'this is a fact',
};
const setupComponent = (testProps: Partial<TestParams> = {}) => {
  const props = { ...defaultParams, ...testProps };
  (UseCatFactQueryService.default as jest.Mock).mockReturnValue({
    isLoading: false,
    data: {
      catFact: props,
    },
  });

  (ReactQuery.useQueryClient as jest.Mock).mockImplementation(() => {
    return {
      invalidateQueries: fakeInvalidate,
    };
  });

  const view = render(<CatFacts></CatFacts>);
  return view;
};

describe('CatFact component', () => {
  it('should render', () => {
    const { container } = setupComponent();
    expect(container).toBeTruthy();
  });

  it('should render header text', () => {
    setupComponent();
    expect(screen.getByRole('heading', { name: /Cat facts are given below/i })).toBeInTheDocument();
  });

  it('should render fact text correctly', () => {
    setupComponent();
    expect(screen.getByText(/Fact:/i)).toBeInTheDocument();
    expect(screen.getByText(/this is a fact/i)).toBeInTheDocument();
    setupComponent({ fact: 'another fact' });
    expect(screen.getByText(/another fact/i)).toBeInTheDocument();
  });

  it('should render length text correctly', () => {
    setupComponent();
    expect(screen.getByText(/Length:/i)).toBeInTheDocument();
    expect(screen.getByText(/20/i)).toBeInTheDocument();
    setupComponent({ length: 2500 });
    expect(screen.getByText(/2500/i)).toBeInTheDocument();
  });

  it('should render next button', () => {
    setupComponent();
    expect(screen.getByRole('button', { name: /New fact/i })).toBeInTheDocument();
  });

  it('should invalidate the query on new fact click', () => {
    setupComponent();
    const newFactButton = screen.getByRole('button', { name: /New fact/i });
    fireEvent.click(newFactButton);
    expect(fakeInvalidate).toHaveBeenCalledTimes(1);
    expect(fakeInvalidate).toHaveBeenCalledWith({ queryKey: ['getNewCatFact'] });
  });
});
