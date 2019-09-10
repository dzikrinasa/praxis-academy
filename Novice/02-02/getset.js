class Pengguna {

  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

}

let pengguna = new Pengguna("John");
alert(pengguna.name); // John

pengguna = new Pengguna(""); // Name too short.
