//has many relations, etc.so like user.hasMany posts / user.hasMany comments / post.belongsTo user / post.hasMany comments / comments.belongsTo user / comments.belongsTo posts

const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post, Comment };
