const sortByAge = R.sortBy(R.prop("age"));
const youngest = R.pipe(
  sortByAge,
  R.map(({ user, age }) => `${user} is ${age}`),
  R.head
)(users);
// => 'pepples is 1'
