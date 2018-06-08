export const fetchPhotos = () => (
  $.ajax({
    method: 'GET',
    url: 'api/photos'
  })
)

export const fetchPhoto = id => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  })
)

