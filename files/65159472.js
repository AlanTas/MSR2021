data() {
  return {
    config: {
      imageUploadURL: '/api/image/store',
      imageUploadParam: 'image',
      imageUploadParams: { id: '' }
    }
  }
},
watch: {
  id(value) {
    this.config.imageUploadParams.id = value;
  }
}
