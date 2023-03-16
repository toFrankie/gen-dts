const obj = { a: -1 }

const extra = 'b,c,d'

extra.split(',').forEach((key, index) => {
  obj[key] = index => console.log(index)
})

export { obj }
