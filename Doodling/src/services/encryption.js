import sodium from 'libsodium-wrappers';

// Encrypt a message
export async function encryptMessage(message, secretKey) {
  await sodium.ready;
  const nonce = sodium.randombytes_buf(sodium.crypto_secretbox_NONCEBYTES);
  const encrypted = sodium.crypto_secretbox_easy(message, nonce, sodium.from_base64(secretKey));
  return `${sodium.to_base64(nonce)}:${sodium.to_base64(encrypted)}`;
}

// Decrypt a message
export async function decryptMessage(encryptedMessage, secretKey) {
  await sodium.ready;
  const [nonce, encrypted] = encryptedMessage.split(':').map(sodium.from_base64);
  return sodium.crypto_secretbox_open_easy(encrypted, nonce, sodium.from_base64(secretKey));
}
