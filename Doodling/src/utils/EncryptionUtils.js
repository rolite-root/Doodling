import sodium from 'libsodium-wrappers';

export const encryptMessage = async (message) => {
  await sodium.ready;
  const encrypted = sodium.crypto_secretbox_easy(message, 'nonce', 'key');
  return encrypted;
};
