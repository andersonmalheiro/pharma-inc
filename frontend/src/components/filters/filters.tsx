import { Button, FlexColumn, FlexRow } from 'components/utils';
import React, { useState } from 'react';
import { Container, Input, Select, Label } from './filters.styles';
import { UserFilters } from 'api';

const nationalities = [
  'AU',
  'BR',
  'CA',
  'CH',
  'DE',
  'DK',
  'ES',
  'FI',
  'FR',
  'GB',
  'IE',
  'IR',
  'NO',
  'NL',
  'NZ',
  'TR',
  'US',
];

interface FilterProps {
  onFilter: (...args: any[]) => void;
}

const DEFAULT_VALUE = {
  name: '',
  gender: undefined,
  nat: '',
};

export const Filters = (props: FilterProps) => {
  const { onFilter } = props;
  const [filters, setFilters] = useState<UserFilters>(DEFAULT_VALUE);

  const handleFilterChange = (event: { target: any }) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name || target.id;

    setFilters((prevState: UserFilters) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const clear = () => {
    setFilters(DEFAULT_VALUE);
    onFilter({});
  };

  return (
    <FlexColumn>
      <Container>
        <FlexColumn>
          <Label htmlFor="name">Name</Label>
          <Input
            name="name"
            id="name"
            data-testid="name"
            value={filters?.name}
            placeholder="Search by name..."
            onChange={handleFilterChange}
          />
        </FlexColumn>
        <FlexColumn>
          <Label htmlFor="gender">Gender</Label>
          <Select
            name="gender"
            id="gender"
            data-testid="gender"
            value={filters?.gender}
            onChange={handleFilterChange}
          >
            <option value="">Select a gender...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </FlexColumn>
        <FlexColumn>
          <Label htmlFor="nat">Nationality</Label>
          <Select
            name="nat"
            id="nat"
            data-testid="nat"
            value={filters?.nat}
            onChange={handleFilterChange}
          >
            <option value="">Select a nation...</option>
            {nationalities.map((nation) => (
              <option key={nation} value={nation}>
                {nation}
              </option>
            ))}
          </Select>
        </FlexColumn>
      </Container>
      <FlexRow aligment="center" justify="center" padding="1em" gap="1em">
        <Button
          onClick={clear}
          styling="default"
          id="clear"
          data-testid="clear"
        >
          Clear
        </Button>
        <Button
          onClick={() => onFilter(filters)}
          styling="primary"
          data-testid="submit"
          id="submit"
        >
          Filter
        </Button>
      </FlexRow>
    </FlexColumn>
  );
};
