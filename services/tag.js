export const getTagNames = posts => {
  const tagArray = []
  const isTag = posts.filter(
    post => post.properties.tag.multi_select.length > 0,
  )
  const filters = isTag.map(filters => filters.properties.tag.multi_select)
  filters.map(filter => filter.map(value => tagArray.push(value?.name)))
  return [...new Set(tagArray)]
}
