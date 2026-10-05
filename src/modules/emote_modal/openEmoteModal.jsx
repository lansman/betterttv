import {modals} from '@mantine/modals';
import React from 'react';
import {openModal} from '@/common/utils/modal';
import {EmoteProviderMetadata} from '@/utils/emote';
import styles from './EmoteModal.module.css';
import EmoteModalContent from './EmoteModalContent';
import {resetAdd} from './store';

function emoteTitle(emote) {
  const providerLogo = EmoteProviderMetadata[emote.category?.provider]?.logoUrl;
  return (
    <span className={styles.title}>
      {providerLogo != null ? (
        <img className={styles.titleLogo} src={providerLogo} alt={emote.category?.displayName} />
      ) : null}
      {emote.code}
    </span>
  );
}

export default function openEmoteModal(emote) {
  resetAdd();

  function handleClose() {
    modals.close(modalId);
  }

  const modalId = openModal({
    title: emoteTitle(emote),
    description: <EmoteModalContent emote={emote} onClose={handleClose} />,
  });
  return modalId;
}
