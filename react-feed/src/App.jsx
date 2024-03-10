import React, { useState } from 'react'

function App() {

  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const [comments, setComments] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author: author,
      content: content,
      createdAt: new Date()
    }
    setComments((state) => [newComment, ...state])
    setAuthor('')
    setContent('')
  }

  return (
    <div id="app">
      <h1>Feed de Comentários</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Email</label>
        <input
          type="email"
          id="author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="content">Comentário</label>
        <textarea
          id="content"
          cols="30"
          rows="6"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button>Enviar comentário</button>
      </form>
      <hr />
      <section id="comments">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id}>
              <h3>{comment.author}</h3>
              <span>Em {comment.createdAt.toLocaleDateString()}</span>
              <p>{comment.content}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>Nenhum comentário ainda</p>
        )}
      </section>
    </div>
  );
}

export default App
