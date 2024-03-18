{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const scriptURL = 'https://script.google.com/macros/s/AKfycbwxrr9gY3hHl86SuG0uv8nQa0NJHnmqFYqzCzrqM0w4wWDuE-B--j9r9iwch5FHZK6o/exec'\
\
const form = document.forms['contact-form']\
\
form.addEventListener('submit', e => \{\
  e.preventDefault()\
  fetch(scriptURL, \{ method: 'POST', body: new FormData(form)\})\
  .then(response => alert("Thank you! your form is submitted successfully." ))\
  .then(() => \{ window.location.reload(); \})\
  .catch(error => console.error('Error!', error.message))\
\})}