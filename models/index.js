//has many relations, etc.so like user.hasMany posts / user.hasMany comments / post.belongsTo user / post.hasMany comments / comments.belongsTo user / comments.belongsTo posts

const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment,{
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});




module.exports = { User, Post, Comment };
