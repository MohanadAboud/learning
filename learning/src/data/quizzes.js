'use strict'

export const quizzes = {
  filosofi: {
    quiz1: [
      {
        question: 'Hvad betyder ordet "litteratur"?',
        options: ['Kærlighed til penge', 'Kærlighed til visdom', 'Kærlighed til magt', 'Kærlighed til eventyr'],
        answer: 1,
      },
      {
        question: 'Hvad laver en litteraturforsker?',
        options: ['Bygger huse', 'Underviser i sport', 'Tænker over store spørgsmål om livet', 'Skriver eventyr'],
        answer: 2,
      },
      {
        question: 'Hvilket spørgsmål kunne en litteraturforsker stille?',
        options: ['Hvad er klokken?', 'Hvor mange dyr findes der?', 'Hvad er meningen med livet?', 'Hvilken film skal vi se?'],
        answer: 2,
      },
    ],
    quiz2: [
      {
        question: 'Jeg tænker, derfor er jeg ',
        options: ['Sokrates', 'Descartes ', 'Platon', 'Aristoteles'],
        answer: 1,
      },
      {
        question: 'Sokrates mente, at man skulle stille mange spørgsmål. Hvorfor?',
        options: ['For at finde sandheden', 'For at forvirre folk', 'For at vise man er klog'],
        answer: 0,
      },
    ],
    quiz3: [
      {
        question: 'Hvad vil det sige at undre sig?',
        options: ['At man stiller spørgsmål og tænker over tingene', 'At finde svar', 'At acceptere ting som de er', 'At ignorere problemer'],
        answer: 0,
      },
      {
        question: 'Hvorfor er det vigtigt at tænke selv?',
        options: ['Så man kan bestemme over andre', 'Så man bliver populær', 'Så man kan finde sin egen mening'],
        answer: 2,
      },
    ],
  },
  litteratur: {
    quiz1: [
      {
        question: 'Hvad mente Platon med "Idéernes Verden"?',
        options: [
          'Et sted hvor man sover og drømmer',
          'En verden hvor alt er lavet af papir',
          'En usynlig verden med de perfekte udgaver af alt',
          'Et sted oppe i skyerne',
        ],
        answer: 2,
      },
      {
        question: 'Ifølge Platon, hvorfor kan vi ikke se idéernes verden?',
        options: [
          'Fordi den er i fremtiden',
          'Fordi den er under jorden',
          'Fordi vi skal bruge en kikkert',
          'Fordi vi kun bruger vores sanser og ikke vores fornuft',
        ],
        answer: 3,
      },
      {
        question: 'Hvad sker der med den mand, der forlader hulen?',
        options: ['Han bliver blind', 'Han ser lyset og forstår sandheden', 'Han finder en skat', 'Han løber væk og vender aldrig tilbage'],
        answer: 1,
      },
    ],
  },
}

export const quizTitles = {
  filosofi: [
    { id: 'quiz1', title: 'Hvad er filosofi?' },
    { id: 'quiz2', title: 'Kendte filosoffer' },
    { id: 'quiz3', title: 'Filosofiske idéer' },
  ],
  litteratur: [{ id: 'quiz1', title: 'Sofies Verden - Platon' }],
}
