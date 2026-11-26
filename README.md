# Neural Lab

**▶ Abrir el laboratorio: https://neural-lab-xi.vercel.app**

Laboratorio interactivo de aprendizaje profundo para estudiantes de Derecho sin
formación técnica previa. Página única, sin dependencias externas y sin servidor:
las seis redes neuronales se entrenan en el navegador de quien la abre, y ningún
dato sale del equipo.

## Contenido

Diez estaciones en orden de dificultad creciente:

| # | Estación | Qué se aprende |
|---|----------|----------------|
| 1 | ¿Qué es aprender? | Ajustar números a mano frente a hacerlo por descenso de gradiente |
| 2 | La neurona | Las cuatro operaciones de una unidad, número a número |
| 3 | Error y pérdida | Entropía cruzada, gradiente y tasa de aprendizaje |
| 4 | Retropropagación | Nueve pasos con aritmética explícita sobre una red 2-2-1 |
| 5 | Entrena una red | MLP configurable, mapa de decisiones y detección de sobreajuste |
| 6 | Aciertos y errores | Umbral, matriz de confusión y coste asimétrico de cada error |
| 7 | Imágenes y CNN | Convolución paso a paso y red convolucional entrenable |
| 8 | Tipos de predicción | Binaria, multiclase, multietiqueta y regresión |
| 9 | Sesgos y límites | Disparidad de error por subgrupo con etiquetas históricas sesgadas |
| 10 | Glosario y cierre | 96 fichas de vocabulario, informe del estudiante y guía docente |

Un glosario transversal cubre todos los términos técnicos que aparecen en el
texto: definición sin jerga, analogía, ejemplo numérico, error de interpretación
frecuente y, cuando procede, relevancia en el análisis jurídico. Tres niveles de
redacción —sin tecnicismos, intermedio y avanzado— reescriben las explicaciones
de todo el laboratorio.

## Uso en clase

La estación 10 incluye una guía docente con una secuencia de 90 minutos, seis
preguntas de examen y las limitaciones que conviene advertir al grupo. Cada
estudiante puede generar al final un informe con sus respuestas y conclusiones.

## Despliegue

Sitio estático de un solo archivo; no hay build. Cada push a `main` despliega en
Vercel automáticamente.

## Advertencia

Todos los datos y etiquetas son sintéticos, generados con reglas inventadas con
fines didácticos. Ninguno de estos modelos debe emplearse para decidir sobre
personas.
