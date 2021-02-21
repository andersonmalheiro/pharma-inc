import React, { useEffect } from 'react';
import { UserFilters } from 'api';
import { User } from 'api/services/models';
import { Filters } from 'components/filters';
import { Table, TableAction, TableColumn } from 'components/table';
import { FlexRow } from 'components/utils';
import { Container } from './user-list.styles';
import { UserModal } from 'components/user-modal';
import {
  userListSelector,
  setQueryPage,
  setShowModal,
  setUser,
  loadData,
} from 'store/reducers/usersSlice';
import { useDispatch, useSelector } from 'react-redux';

interface UserListProps {
  pageNumber?: number;
}

export const UserList = (props: UserListProps) => {
  const dispatch = useDispatch();
  const { pageNumber } = props;

  const { data, loading, user, showModal, filters, queryPage } = useSelector(
    userListSelector
  );

  // Method to show user modal
  const showUserModal = (user: User) => {
    dispatch(setUser(user));
    dispatch(setShowModal(true));
  };

  // Method to close user modal
  const closeUserModal = () => {
    dispatch(setUser(undefined));
    dispatch(setShowModal(false));
  };

  // Table columns configuration
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

  // Table actions configuration
  const tableActions: TableAction[] = [
    {
      text: 'Details',
      onClick: showUserModal,
    },
  ];

  useEffect(() => {
    if (pageNumber) {
      dispatch(setQueryPage(Number(pageNumber)));
      dispatch(loadData({ ...filters }, Number(pageNumber)));
    } else {
      dispatch(setQueryPage(1));
      dispatch(loadData({ ...filters }, 1));
    }
  }, [dispatch]);

  // Method to handle filters
  const onFilter = (query: UserFilters) => {
    dispatch(loadData(query));
  };

  // Method to handle pagination
  const onPaginate = (index: number) => {
    if (index < 1) {
      return;
    } else {
      dispatch(setQueryPage(index));
      dispatch(loadData({ ...filters }, index));
    }
  };

  return (
    <Container>
      <FlexRow width="100%">
        <Filters onFilter={onFilter} />
      </FlexRow>
      <Table
        columns={columns}
        data={data}
        loading={loading}
        actions={tableActions}
        onPaginate={onPaginate}
        page={queryPage}
      />
      {user && (
        <UserModal data={user} open={showModal} close={closeUserModal} />
      )}
    </Container>
  );
};
