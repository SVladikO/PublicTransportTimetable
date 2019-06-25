module.exports = {
  active: {
    green: 'public/img/green.png',
    red: 'public/img/red.png',
    blue: 'public/img/blue.png',
    yellow: 'public/img/yellow.png',
    white: 'public/img/white.png'
  },
  disabled: 'public/img/off.png',
  get(colorName) {
    return {
      active: this.active[colorName],
      disabled: this.disabled
    }
  }
};
