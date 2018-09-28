export default collection => ({
  entities: collection.map(item => ({
    id: item.id,
    post: item.post,
    comments: item.comments ? Object.values(item.comments) : [{ comment: 'nocomment:)'}],
    commentCount: item.comment_count,
   })),
})
