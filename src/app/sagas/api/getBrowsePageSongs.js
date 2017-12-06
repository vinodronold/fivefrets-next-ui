export default (start, page) => ({
  total_pages: 5,
  songs: {
    [`${start}-PAGE-${page}-1`]: {
      title: `${start}-PAGE-${page}-1`
    },
    [`${start}-PAGE-${page}-2`]: {
      title: `${start}-PAGE-${page}-2`
    },
    [`${start}-PAGE-${page}-3`]: {
      title: `${start}-PAGE-${page}-3`
    },
    [`${start}-PAGE-${page}-4`]: {
      title: `${start}-PAGE-${page}-4`
    },
    [`${start}-PAGE-${page}-5`]: {
      title: `${start}-PAGE-${page}-5`
    }
  }
})
