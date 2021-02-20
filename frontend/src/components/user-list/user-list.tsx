import React, { useEffect, useState } from 'react';
import { httpClient, UserFilters, UserService } from 'api';
import { User } from 'api/services/models';
import { Filters } from 'components/filters';
import { Table, TableAction, TableColumn } from 'components/table';
import { FlexRow } from 'components/utils';
import { Container } from './user-list.styles';
import { UserModal } from 'components/user-modal';

export const UserList = () => {
  const userService = new UserService(httpClient);

  // state
  const [users, setUsers] = useState<User[]>([]);
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User>(null);
  const [showModal, setShowModal] = useState(false);

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

  const showUserDetails = (user: User) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

  const tableActions: TableAction[] = [
    {
      text: 'Details',
      onClick: showUserDetails,
    },
  ];

  const loadData = async (filters: UserFilters) => {
    try {
      setLoading(true);
      const { name, ...rest } = filters;
      const response = await userService.getUsers({ ...rest, results: 50 });
      setLoading(false);
      if (response && response.results) {
        const { results } = response;
        setUsers(results);
        if (name) {
          const filtered = results.filter((user) => {
            return user.full_name.toLowerCase().includes(name);
          });
          setData(JSON.parse(JSON.stringify(filtered)));
        } else {
          setData(JSON.parse(JSON.stringify(results)));
        }
      }
    } catch (error) {
      setLoading(false);
      setUsers([]);
    }
  };

  useEffect(() => {
    loadData({ page: 1 });
  }, []);

  const onFilter = (filters: UserFilters) => {
    loadData(filters);
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
      />
      {selectedUser && (
        <UserModal data={selectedUser} open={showModal} close={closeModal} />
      )}
    </Container>
  );
};
