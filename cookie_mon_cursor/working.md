1. Math.atan2(y, x): This returns the angle (in radians) from the horizontal axis to the point where your mouse is.
2. Math.cos and Math.sin: We use these to convert that angle back into $x$ and $y$ coordinates.
3. Constraint: By multiplying by a fixed distance (like 25px), we ensure the pupil stays inside the eye socket instead of flying off the screen!

4. Concepts : Trigonometry-based movement, CSS state management, and Coordinate mapping.

# 🍪 Project: Cookie Monster Eye-Tracker & Chomp

This documentation covers the technical concepts required to build an interactive, mouse-tracking UI element with state-based animations.

---

## 🏗️ 1. Technical Architecture

The project is built using a **Triple-Layer** approach:
1.  **HTML5**: Defines the skeletal structure (The Card, Eyes, and Mouth).
2.  **CSS3**: Handles the visual design and the "Chomp" physics via Keyframes.
3.  **Vanilla JavaScript**: Logic layer for calculating real-time trigonometry for eye movement.

---

## 📐 2. The Core Concept: Trigonometric Tracking

To make the eyes follow the mouse, we use the `Math.atan2()` function. Unlike standard tangent, `atan2` calculates the angle from the origin to a point $(x, y)$ while correctly handling all four quadrants of the coordinate plane.

### The Math Logic:
1.  **Find the Delta:** Calculate the distance between the Mouse $(Mx, My)$ and the Eye Center $(Ex, Ey)$.
    * $dx = Mx - Ex$
    * $dy = My - Ey$
2.  **Calculate Angle:** Get the angle in radians.
    * $\theta = \text{atan2}(dy, dx)$
3.  **Apply Constraint:** Instead of moving the pupil *to* the mouse, we move it a fixed distance $R$ (radius) *along* that angle.
    * $NewX = \cos(\theta) \times R$
    * $NewY = \sin(\theta) \times R$

---

## 🎨 3. CSS Component Breakdown

### A. The Pupil Constraint
We use `position: absolute` for the pupil and `transform: translate()` for movement. Using `transform` is more performant than `top/left` because it avoids browser "reflows."

### B. The "Chomp" Animation
The biting motion is achieved by rapidly scaling the Y-axis of the mouth element.
```css
@keyframes snap {
  0%   { transform: scaleY(1); }   /* Mouth wide open */
  100% { transform: scaleY(0.2); } /* Mouth snapped shut */
}