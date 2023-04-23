<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
    <body>
      <h2>Recepta: <xsl:value-of select="recepe/title" /></h2>
      <table border="1">
        <tr>
          <td colspan="2"><img src="{recepe/image/@src}" alt="{recepe/image/@alt}" /></td>
        </tr>
        <tr>
          <td>Ingredients:</td>
          <td>
            <xsl:for-each select="recepe/ingredients/ingredient">
              <p><xsl:value-of select="."/></p>
            </xsl:for-each>
          </td>
        </tr>
        <tr>
          <td>Temps:</td>
          <td>
            <xsl:for-each select="recepe/times/time">
              <p><xsl:value-of select="."/></p>
            </xsl:for-each>
          </td>
        </tr>
        <tr>
          <td>Passos:</td>
          <td>
            <ol>
              <xsl:for-each select="recepe/steps/step">
                <li><xsl:value-of select="."/></li>
              </xsl:for-each>
            </ol>
          </td>
        </tr>
      </table>
    </body>
  </html>
</xsl:template>
</xsl:stylesheet>
