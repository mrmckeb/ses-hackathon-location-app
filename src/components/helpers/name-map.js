const nameMap = {
  jsmith: {
    name: 'John Smith'
  },
  jsimpson: {
    name: 'Jane Simpson',
    rank: 'Team Leader'
  },
  ijones: {
    name: 'Indiana Jones',
    rank: 'Archaeologist'
  },
  dkim: {
    name: 'Deborah Kim',
    rank: 'Dep. Officer'
  },
  fthompson: {
    name: 'Frank Thompson'
  },
  tkane: {
    name: 'Tim Kane',
    rank: 'Officer'
  },
  foo: {
    name: 'Filo Oo',
    rank: 'Ninja Warrior'
  },
  bar: {
    name: 'Bob Ar',
    rank: 'Officer'
  },
  blah: {
    name: 'Brian Lah'
  },
  lbrynn: {
    name: 'Lisa Brynn',
    rank: 'Duty Officer'
  }
};

const map = (member) => Object.assign(
  {},
  member,
  nameMap[member.username]
);

export default map;
