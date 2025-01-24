export function getAvatarVisualNumber({ address }: { address: string }) {
  console.log('address', address);

  return `profile-avatar-bg-${Number(address) % 13}`;
}
