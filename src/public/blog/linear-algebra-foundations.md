---
title: Linear Algebra Foundations
date: 2025-10-10
---

### Table of Contents
* [Scalar](#scalar)
* [Vector](#vector)
* [Matrices](#matrices)
* [Tensors](#tensors)
* [Matrix Operations](#matrix-operations)
    - [1. Addition and Subtraction](#1-addition-and-subtraction)
    - [2. Matrix Multiplication](#2-matrix-multiplication)
    - [3. Transpose](#3-transpose)
    - [4. Inverse](#4-inverse)
* [To Remember](#to-remember)
    - [1. Vector Magnitude](#vector-magnitude)
    - [2. Dot Product](#dot-product)
* [Determinants and Rank](#determinants-and-rank)
    - [1. Determinant](#determinant)
    - [2. Rank](#rank)
* [Eigenvalues and Eigenvectors](#eigenvalues-and-eigenvectors)
* [Orthogonality and Orthonormality](#orthogonality-and-orthonormality)

Linear Algebra is the **language of mathematics and machine learning**.  It provides the foundation for everything from neural networks to computer graphics.  In this guide, we’ll start from the basics — scalars and vectors — and move up to advanced concepts like eigenvalues, orthogonality, and matrix decomposition.  The goal is to make every concept simple and intuitive while covering the core ideas needed for real-world applications.

## Scalar

A **scalar** is a single number — it has **magnitude** but no direction.  

Example: 5, -3.2, or π.  

In real-world terms, temperature (25°C) or time (10s) are scalars.
## Vector

A **vector** is an ordered list of numbers that represents both **magnitude and direction**.  

Example: a = [3, 4] represents a point or direction in 2D space.

## Matrices

A **matrix** is a 2D array of numbers arranged in rows and columns. Matrices are used to store datasets or perform linear transformations.

Example:
$$
A = \begin{bmatrix} 1 & 2 \\\\ 3 & 4 \end{bmatrix}
$$

## Tensors

A **tensor** generalizes scalars, vectors, and matrices to higher dimensions.

- 0D → Scalar → rank 0 tensor
- 1D → Vector → rank 1 tensor
- 2D → Matrix → rank 2 tensor
- 3D or higher → Tensor

Example: Images (height × width × channels) are 3D tensors used in deep learning.  

In general, Scalars, vectors, and matrices are all special cases of tensors.

---

## Matrix Operations

Matrix operations form the building blocks of data transformations.

### 1. Addition and Subtraction
Two matrices can be added or subtracted **if they have the same shape**.

$$
A + B = \begin{bmatrix} 1 & 2 \\\\ 3 & 4 \end{bmatrix} + \begin{bmatrix} 5 & 6 \\\\ 7 & 8 \end{bmatrix} = \begin{bmatrix} 6 & 8 \\\\ 10 & 12 \end{bmatrix}
$$

### 2. Matrix Multiplication
The **dot product** rule applies.  If A is (m×n) and B is (n×p), their product AB is (m×p):  
$$
        (AB)_{ij} = \sum_{k=1}^{n} A_{ik}B_{kj}
$$  
Used widely in machine learning and neural networks.

### 3. Transpose
Flips the matrix over its diagonal.
$$
A^T = \begin{bmatrix} 1 & 2 \\\\ 3 & 4 \end{bmatrix}^T = \begin{bmatrix} 1 & 3 \\\\ 2 & 4 \end{bmatrix}
$$

### 4. Inverse

The inverse of a matrix \(A^{-1}\) satisfies:

$$
AA^{-1} = A^{-1}A = I
$$

where \(I\) is the identity matrix.

Not every matrix has an inverse. A matrix must be:

- Square (n X n)
- Non-singular

For a square matrix, an inverse exists only if:

$$
\det(A) \neq 0
$$

If $$(\det(A)=0)$$, the matrix is singular and has no inverse.

Matrix inverses are commonly used to solve systems of linear equations and analyze linear transformations.

---
## To Remember

### Vector Magnitude 

The magnitude (or norm) of a vector represents its length.  

For a 2D vector:

$$
\vec{v} = (x, y)
$$

the magnitude is:

$$
\|\vec{v}\| = \sqrt{x^2 + y^2}
$$

#### Example

For the vector

$$
\vec{v} = (3, 4)
$$

the magnitude is:

$$
\|\vec{v}\| = \sqrt{3^2 + 4^2}
= \sqrt{9 + 16}
= \sqrt{25}
= 5
$$


## Dot Product

The dot product is an operation that takes two vectors and returns a scalar.

For two 2D vectors

$$
\vec{u} = (u_1, u_2)
$$

and

$$
\vec{v} = (v_1, v_2)
$$

their dot product is:

$$
\vec{u} \cdot \vec{v} = u_1v_1 + u_2v_2
$$

#### Example

Let

$$
\vec{u} = (1, 2)
$$

and

$$
\vec{v} = (3, 4)
$$

Then:

$$
\vec{u} \cdot \vec{v}
= (1)(3) + (2)(4)
= 3 + 8
= 11
$$

---
## Determinants and Rank

### Determinant

The **determinant** is a scalar that summarizes a square matrix’s properties.   
For a 2×2 matrix:
$$
A = \begin{bmatrix} a & b \\\\ c & d \end{bmatrix}
$$
$$
det(A) = ad - bc 
$$
- If det(A) ≠ 0 → invertible (non-singular)
- If det(A) = 0 → non-invertible (singular)
#### Properties
- Swapping two rows changes the sign. 
- Multiplying a row by c multiplies determinant by c.  
- Identical rows → determinant = 0.

### Rank
The **rank** of a matrix is the maximum number of linearly independent rows or columns. 
- Full rank: All rows/columns are independent.  
- Lower rank: Some are dependent.  
**Relation:**  
For a square n×n matrix:
- If det(A) = 0 → rank < n  
- If det(A) ≠ 0 → rank = n

---

## Eigenvalues and Eigenvectors
Eigenvalues and eigenvectors describe how a matrix transforms space.  
  
Definition:  
 - For matrix A:
$$
A\mathbf{v} = \lambda\mathbf{v}
$$
- $$\mathbf{v}$$: eigenvector
- $$\lambda$$: eigenvalue  

The transformation scales the vector by λ. If λ is positive, the direction remains the same. If λ is negative, the direction is reversed.

$$
A\mathbf{v} = -2\mathbf{v}
$$

### Finding Eigenvalues
Solve the **characteristic equation**:
$$
det(A - \lambda I) = 0
$$

#### Geometric View
Eigen vectors point in directions that remain unchanged under transformation.   Eigen values show how much they stretch or shrink.

---

### Orthogonality and Orthonormality

Orthogonality is the concept of perpendicular vectors in space.

**Orthogonal Vectors**  

Two vectors \(\vec{u}\) and \(\vec{v}\) are orthogonal if their dot product is zero:

$$
\vec{u} \cdot \vec{v} = 0
$$

For example:

$$
(1, 0) \cdot (0, 1) = 0
$$

Since their dot product is zero, the vectors are perpendicular (orthogonal).

Two non-zero orthogonal vectors are also linearly independent.

**Orthonormal Vectors**  

A set of vectors is **orthonormal** if:

1. Every pair of vectors is orthogonal.
2. Each vector has a magnitude of 1 (unit length).

For example:

$$
\vec{u} =
\begin{bmatrix}
1 \\
0
\end{bmatrix},
\qquad
\vec{v} =
\begin{bmatrix}
0 \\
1
\end{bmatrix}
$$

These vectors are orthogonal because:

$$
\vec{u} \cdot \vec{v} = 0
$$

and each has unit length:

$$
\|\vec{u}\| = \|\vec{v}\| = 1
$$

Therefore, $$(\vec{u})$$ and $$(\vec{v})$$ form an orthonormal set.

If the columns of a matrix \(Q\) are orthonormal vectors, then:

$$
Q^T Q = I
$$

where \(I\) is the identity matrix.

Orthonormal vectors are widely used in machine learning, computer graphics, and matrix decompositions such as QR decomposition.