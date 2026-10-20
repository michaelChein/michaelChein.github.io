// Renders math (KaTeX) and code highlighting (highlight.js) on article pages.
document.addEventListener("DOMContentLoaded", function () {
  var article = document.querySelector(".article");
  if (!article) return;

  if (window.renderMathInElement) {
    window.renderMathInElement(article, {
      delimiters: [
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false
    });
  }

  if (window.hljs) {
    article.querySelectorAll("pre code").forEach(function (block) {
      window.hljs.highlightElement(block);
    });
  }
});
