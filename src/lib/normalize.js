//  we need normalize response because comments is a deeply
// nested object instead of array of object
export default collection => ({
  entities: collection.map(item => ({
    id: item.id,
    post: item.post,
    comments: item.comments ? Object.values(item.comments) : [{ comment: 'nocomment:)'}],
    commentCount: item.comment_count,
   })),
})
