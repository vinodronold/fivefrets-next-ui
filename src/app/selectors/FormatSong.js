export default (id, song) => ({ id, title: song ? song.title : 'Loading...' })
