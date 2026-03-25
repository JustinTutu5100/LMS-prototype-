import pool from '../config/postgres.js';

// GET /api/courses - all courses
export const getCourses = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM courses ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/courses - create a new course
export const createCourse = async (req, res) => {
  const { title, description, category, status, cover } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO courses(title, description, category, status, cover) VALUES($1,$2,$3,$4,$5) RETURNING *',
      [title, description, category, status || 'draft', cover]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/courses/:id - update a course
export const updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title, description, category, status, cover } = req.body;
  try {
    const result = await pool.query(
      'UPDATE courses SET title=$1, description=$2, category=$3, status=$4, cover=$5 WHERE id=$6 RETURNING *',
      [title, description, category, status, cover, id]
    );
    if (!result.rows.length) return res.status(404).json({ error: 'Course not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /api/courses/:id - delete a course
export const deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM courses WHERE id=$1 RETURNING *', [id]);
    if (!result.rows.length) return res.status(404).json({ error: 'Course not found' });
    res.json({ message: 'Course deleted', course: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};