<html>
  <head>
    <style>
      .board {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(10, 1fr);
        grid-gap: 1px;
        width: 500px;
        height: 500px;
        background-color: lightblue;
      }

      .board div {
        background-color: white;
        border: 1px solid black;
        width: 100%;
        height: 100%;
      }

      .hit {
        background-color: red;
      }

      .miss {
        background-color: gray;
      }
    </style>
  </head>
  <body>
    <div class="board">
      <!-- 10x10 grid of cells -->
      <div id="0-0"></div>
      <div id="0-1"></div>
      ...
      <div id="9-8"></div>
      <div id="9-9"></div>
    </div>
    <script>
      const board = document.querySelector(".board");
      const cells = board.querySelectorAll("div");
      let ships = [
        {
          start: "2-2",
          end: "2-5"
        },
        {
          start: "5-6",
          end: "5-8"
        }
      ];

      cells.forEach(cell => {
        cell.addEventListener("click", function() {
          let id = this.id;
          let hit = false;
          
          for (let ship of ships) {
            let start = ship.start.split("-");
            let end = ship.end.split("-");

            if (
              id === ship.start ||
              id === ship.end ||
              (id.startsWith(start[0]) && id.endsWith(end[1])) ||
              (id.startsWith(end[0]) && id.endsWith(start[1]))
            ) {
              this.classList.add("hit");
              hit = true;
              break;
            }
          }

          if (!hit) {
            this.classList.add("miss");
          }
        });
      });
    </script>
  </body>
</html>
