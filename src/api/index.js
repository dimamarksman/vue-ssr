export default {
  fetchItem(id) {
    return new Promise(resolve => {
      setTimeout(() => resolve({ title: `Item ${id}` }), 500);
    });
  }
};
