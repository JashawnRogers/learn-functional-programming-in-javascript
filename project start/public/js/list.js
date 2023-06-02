function app(state, output) {
  append(view(state), output);
}

function view(state) {
  const el = elem("div");

  return state.length > 0
    ? R.pipe(...state.map((content, index) => append(message(content, index))))(
        elem("div")
      )
    : el;
}
function message(content, index) {
  // compose returns a function. with that being said, pass "elem('div)" and the compose function will apply whatever
  // we specify to "elem('div)" and return it
  return R.compose(
    append(text(content)),
    attr("data-index", index),
    addClass("bg-warning"),
    addClass("p-3")
  )(elem("div"));
}

app(Object.freeze([]), getElem("message-list"));
