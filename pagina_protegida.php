<div class="card">
  <h2>Últimas Notícias</h2>
  <ul>
    <?php
      $conn = new mysqli("localhost", "root", "", "ecoworld");
      if ($conn->connect_error) {
          die("Erro: " . $conn->connect_error);
      }

      $sql = "SELECT titulo, conteudo, data_cadastro FROM noticias ORDER BY data_cadastro DESC LIMIT 5";
      $result = $conn->query($sql);

      if ($result->num_rows > 0) {
          while($row = $result->fetch_assoc()) {
              echo "<li><strong>" . $row["titulo"] . ":</strong> " . $row["conteudo"] . "</li>";
          }
      } else {
          echo "<li>Nenhuma notícia encontrada.</li>";
      }

      $conn->close();
    ?>
  </ul>
</div>
