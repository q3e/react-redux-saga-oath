import _pick from 'lodash/pick'
import _toArray from 'lodash/toArray'

export default collection => ({
  entities: collection.map(item => ({
    id: item.id,
    post: item.post,
    comments: _isEmpty(item.comments) ? ['no comments :)'] : _toArray(_pick(item.comments, 'comment')),
    commentCount: item.comment_count,
   })),
})
