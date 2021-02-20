import { render, screen } from '@testing-library/react';
import { Table, TableAction, TableColumn } from '../components/table';
import '@testing-library/jest-dom/extend-expect';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

const columns: TableColumn[] = [
  {
    key: 'full_name',
    title: 'Name',
  },
  {
    key: 'gender',
    title: 'Gender',
  },
  {
    key: 'birth_date',
    title: 'Birth',
  },
];

const actions: TableAction[] = [
  {
    onClick: () => {},
    text: 'Test action',
  },
];

const data = [
  {
    full_name: 'João',
    birth_date: '20/10/1997',
    gender: 'male',
  },
];

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Table component', () => {
  it('should throw error when creating table without columns', () => {
    expect(() => {
      act(() => {
        render(<Table />, container);
      });
    }).toThrowError();
  });

  it('should show an message when no data is provided', () => {
    act(() => {
      render(<Table columns={columns} data={[]} />, container);
    });
    expect(screen.getByText('No results...')).toBeInTheDocument();
  });

  it('should create an action button', () => {
    act(() => {
      render(
        <Table columns={columns} data={data} actions={actions} />,
        container
      );
    });
    expect(screen.getByTestId('Test action')).toBeTruthy();
  });

  it('should create a loading indicator', () => {
    act(() => {
      render(
        <Table
          columns={columns}
          data={data}
          actions={actions}
          loading={true}
        />,
        container
      );
    });
    expect(screen.getByTestId('loading_icon')).toBeTruthy();
    expect(screen.getByTestId('loading_row')).toBeTruthy();
  });

  it('should disable left pagination button when page index is 1', () => {
    let page = 1;

    act(() => {
      render(
        <Table
          columns={columns}
          data={data}
          actions={actions}
          loading={true}
          page={page}
        />,
        container
      );
    });

    const buttonLeft = screen.getByTestId('paginate_left');

    expect(buttonLeft).toBeDisabled();
  });

  it('should enable left pagination button when page index is more than 1', () => {
    let page = 2;

    act(() => {
      render(
        <Table
          columns={columns}
          data={data}
          actions={actions}
          loading={true}
          page={page}
        />,
        container
      );
    });

    const buttonLeft = screen.getByTestId('paginate_left');
    expect(buttonLeft).toBeEnabled();
  });

  it('should increase page index on paginate', () => {
    let page = 1;

    const onPaginate = (direction: 'left' | 'right') => {
      console.log('direction :>> ', direction);
      if (direction === 'left') {
        if (page === 1) {
          return;
        } else {
          page -= 1;
        }
      } else {
        page += 1;
      }
    };

    act(() => {
      render(
        <Table
          columns={columns}
          data={data}
          actions={actions}
          loading={true}
          page={page}
          onPaginate={onPaginate}
        />,
        container
      );
    });

    const buttonRight = screen.getByTestId('paginate_right');

    act(() => {
      buttonRight.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(page).toBe(2);
  });
});
