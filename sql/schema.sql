CREATE DATABASE IF NOT EXISTS academia_novatech;
USE academia_novatech;

CREATE TABLE IF NOT EXISTS cursos_destacados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    categoria VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    duracion VARCHAR(50) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    imagen VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS profesores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    especialidad VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    foto VARCHAR(255) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    cursos_que_imparte TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS contacto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    asunto VARCHAR(150) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO cursos_destacados (nombre, descripcion, imagen, categoria) VALUES
('HTML5 desde cero', 'Curso introductorio para aprender la estructura básica de una página web.', 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg', 'Desarrollo Web'),
('CSS3 moderno', 'Aprendizaje de estilos, colores, diseño responsive y presentación visual.', 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg', 'Diseño Web'),
('JavaScript básico', 'Curso para agregar interactividad a sitios web mediante JavaScript puro.', 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg', 'Programación'),
('SQL básico', 'Introducción a bases de datos relacionales y consultas SQL.', 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg', 'Bases de Datos'),
('Diseño de interfaces', 'Curso enfocado en crear interfaces claras, ordenadas y fáciles de usar.', 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg', 'Diseño Digital');

INSERT INTO cursos (nombre, descripcion, categoria, duracion, precio, imagen) VALUES
('HTML5 desde cero', 'Aprende a crear la estructura básica de sitios web.', 'Desarrollo Web', '4 semanas', 25000.00, 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg'),
('CSS3 moderno', 'Diseña páginas atractivas con estilos personalizados.', 'Diseño Web', '5 semanas', 30000.00, 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'),
('JavaScript básico', 'Agrega interactividad a páginas web usando JavaScript puro.', 'Programación', '6 semanas', 35000.00, 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg'),
('SQL básico', 'Aprende consultas y manejo básico de bases de datos.', 'Bases de Datos', '4 semanas', 28000.00, 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg'),
('Diseño UX básico', 'Introducción a la experiencia de usuario y diseño funcional.', 'Diseño Digital', '5 semanas', 32000.00, 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg'),
('PHP con MySQL', 'Curso introductorio para crear sitios dinámicos con PHP y base de datos.', 'Programación', '6 semanas', 38000.00, 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg');

INSERT INTO profesores (nombre, especialidad, descripcion, foto, correo, cursos_que_imparte) VALUES
('María Fernández', 'Desarrollo Web', 'Profesora con experiencia en HTML, CSS y creación de sitios web modernos. Se enfoca en enseñar buenas prácticas para desarrollar páginas ordenadas, funcionales y atractivas.', 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg', 'maria.fernandez@novatech.com', 'HTML5 desde cero, CSS3 moderno, Diseño web responsive'),
('Carlos Ramírez', 'Programación', 'Instructor especializado en lógica de programación, JavaScript y resolución de problemas. Su objetivo es que los estudiantes aprendan paso a paso desde las bases.', 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg', 'carlos.ramirez@novatech.com', 'Lógica de programación, JavaScript básico, Introducción a algoritmos'),
('Laura Méndez', 'Bases de Datos', 'Docente con conocimientos en modelado de datos, consultas SQL y administración básica de bases de datos. Promueve el aprendizaje práctico mediante ejercicios reales.', 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg', 'laura.mendez@novatech.com', 'SQL básico, Modelado de bases de datos, Consultas relacionales'),
('Andrés Vargas', 'Diseño Digital', 'Profesor orientado al diseño visual, experiencia de usuario y creación de interfaces limpias. Ayuda a los estudiantes a mejorar la presentación de sus proyectos web.', 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg', 'andres.vargas@novatech.com', 'Diseño de interfaces, UX básico, Prototipado digital'),
('Sofía Morales', 'PHP y MySQL', 'Profesora enfocada en desarrollo web dinámico con PHP, conexión a bases de datos y construcción de proyectos bajo arquitectura MVC.', 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg', 'sofia.morales@novatech.com', 'PHP básico, MySQL, Arquitectura MVC');

INSERT INTO contacto (nombre_completo, correo, telefono, asunto, mensaje) VALUES
('Juan Pérez', 'juan.perez@email.com', '88881111', 'Consulta de cursos', 'Deseo recibir más información sobre los cursos disponibles.'),
('Ana Gómez', 'ana.gomez@email.com', '88882222', 'Horarios', 'Quisiera conocer los horarios disponibles para los cursos de programación.'),
('Luis Rojas', 'luis.rojas@email.com', '88883333', 'Matrícula', 'Me interesa saber cómo puedo realizar el proceso de matrícula.'),
('Carolina Soto', 'carolina.soto@email.com', '88884444', 'Precios', 'Deseo conocer los precios actualizados de los cursos.'),
('Pedro Vargas', 'pedro.vargas@email.com', '88885555', 'Información general', 'Quiero recibir información general sobre la academia.');