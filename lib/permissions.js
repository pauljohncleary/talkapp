isInGroup = function(userId, group) {
  return group && _.find(group.members, function(m) {
    return m === userId;
  });
};
