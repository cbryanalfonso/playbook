const twitter = {
    user: 'Alfonso',
    userName: 'cbryanalfonso',
    bio: 'Mobile Developer',
    trending: 'LaunchX',
    hastag: '#fullstack_Mobile',
    twit: function () {
      return `${this.userName} has comment the trending topic of ${this.trending} with a ${this.hastag}`
    }
  }
  console.log(twitter.twit())

const facebook={
    user: 'cbryanalfonso',
    post:'Hola que tal perros',
    biography: 'Full developer Mobile '
}

console.log(facebook);

const uber={
    profile: 'cbryanalfonso',
    travel: 'CDMX'
}
console.log(uber);