import { from_base64, to_base64 } from 'libsodium-wrappers';

export const encryptMessage = (message, publicKey) => {
  // Implement E2EE here
  return { ciphertext: encryptedData, nonce: nonce };
};

export const decryptMessage = (ciphertext, nonce, privateKey) => {
  // Implement decryption
  return decryptedMessage;
};
