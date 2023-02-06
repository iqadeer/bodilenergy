import { render, screen } from '@testing-library/react';
import Dog from './Dogs';
import { MemoryRouter } from 'react-router-dom';
import * as UseDogQueryService from './useDogQueryService';

jest.mock('@tanstack/react-query');
jest.mock('./useDogQueryService');

interface TestParams {
  id: number;
  name: string;
  imageFileName: string;
}

const defaultParams: TestParams = {
  id: 6,
  name: 'dog 6',
  imageFileName: 'image6.jpg',
};

const setupComponent = (testProps: Partial<TestParams> = {}) => {
  const props = { ...defaultParams, ...testProps };
  (UseDogQueryService.default as jest.Mock).mockReturnValue({
    isLoading: false,
    data: {
      dog: props,
    },
  });

  const view = render(
    <MemoryRouter>
      <Dog></Dog>;
    </MemoryRouter>,
  );
  return view;
};

describe('CatFact component', () => {
  it('should render', () => {
    const { container } = setupComponent();
    expect(container).toBeTruthy();
  });

  it('should render header text', () => {
    setupComponent();
    expect(screen.getByText(/Dog details:/i)).toBeInTheDocument();
    expect(screen.getByText(/Dog details are given below/i)).toBeInTheDocument();
  });

  it('should render dog name', () => {
    setupComponent();
    expect(screen.getByText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByText(/dog 6/i)).toBeInTheDocument();
    setupComponent({ name: 'dog 7' });
    expect(screen.getByText(/dog 7/i)).toBeInTheDocument();
  });

  it('should render dog id', () => {
    setupComponent({ name: 'dog23', id: 6 });
    expect(screen.getByText(/Id:/i)).toBeInTheDocument();
    expect(screen.getByText(/6/i)).toBeInTheDocument();
    setupComponent({ name: 'dog 7', id: 20 });
    expect(screen.getByText(/20/i)).toBeInTheDocument();
  });

  it('should render image with correct src attriburte', () => {
    setupComponent();
    let dogImage = screen.getByRole('img');
    expect(dogImage).toHaveAttribute('src', 'http://localhost:5601/images/image6.jpg');
  });

  it('should render next button', () => {
    setupComponent();
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
  });
});
