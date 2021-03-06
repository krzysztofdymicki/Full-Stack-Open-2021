const { totalLikes, favouriteBlog } = require("../utils/list_test_helper");

const aLotOfBlogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
  }  
]

describe('total likes', () => {
  

  test('of empty list returns 0', () => {

    const result = totalLikes([])

    expect(result).toBe(0)
  })

  test('of on blog equals the likes of that', () => {
    
    const likes = totalLikes([aLotOfBlogs[0]])

    expect(likes).toBe(7)
  })

  test('of more blogs returns correct value', () => {
    
    const blogs = aLotOfBlogs.slice(0,2)

    const likes = totalLikes(blogs)

    expect(likes).toBe(12)
  })
}
)

describe('favourite blog' , () => {

  test('is an empty object, if there is no blogs', () => {
    const result = favouriteBlog([])
    expect(result).toEqual({})
  }),

  test('returns actual favourite blog', () => {
    const result = favouriteBlog(aLotOfBlogs)

    expect(result).toEqual(aLotOfBlogs[2])
  })

})

