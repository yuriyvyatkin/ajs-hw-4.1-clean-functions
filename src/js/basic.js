export default function defineHealthStatus(player) {
  if (player.health > 50) {
    return 'healthy';
  }

  if (player.health < 10) {
    return 'critical';
  }

  return 'wounded';
}
