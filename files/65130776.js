const source = ['ActionScript', 'AppleScript', 'Asp', ...'Python', 'Ruby'];

$('#demo2').tagEditor({
  autocomplete: {
    delay: 0, // show suggestions immediately
    position: {
      collision: 'flip'
    }, // automatic menu position up/down
    source
  },
  forceLowercase: false,
  placeholder: 'Programming languages ...',
  initialTags: ['ActionScript', 'AppleScript'],
  beforeTagSave: (field, editor, tags, tag, val) => {
    return source.includes(val) && val;
  }
});