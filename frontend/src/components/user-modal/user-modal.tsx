import { User } from 'api/services/models';
import { FlexColumn } from 'components/utils';
import React from 'react';
import { StyledPopup, Avatar, InfoRow, CloseButton } from './user-modal.styles';

interface AppModalProps {
  open: boolean;
  close: () => void;
  data: User;
}

export const UserModal = (props: AppModalProps) => {
  const { open, close, data } = props;
  return (
    <StyledPopup open={open} onClose={close} closeOnDocumentClick>
      <Avatar src={data.picture.large} />
      <CloseButton onClick={close}>x</CloseButton>
      <FlexColumn padding="95px 1em 1em 1em" width="100%">
        <InfoRow>
          <strong>Name:</strong>
          <span>{data.full_name}</span>
        </InfoRow>
        <InfoRow>
          <strong>Gender:</strong>
          <span>{data.gender || '---'}</span>
        </InfoRow>
        <InfoRow>
          <strong>Birth date:</strong>
          <span>{data.birth_date || '---'}</span>
        </InfoRow>
        <InfoRow>
          <strong>Email:</strong>
          <span>{data.email || '---'}</span>
        </InfoRow>
        <InfoRow>
          <strong>Phone:</strong>
          <span>{data.phone || '---'}</span>
        </InfoRow>
        <InfoRow>
          <strong>Nationality:</strong>
          <span>{data.nat || '---'}</span>
        </InfoRow>
        <InfoRow>
          <strong>ID:</strong>
          <span>{data.id.value || '---'}</span>
        </InfoRow>
      </FlexColumn>
    </StyledPopup>
  );
};
