<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="table">
  <table>
    <xsl:apply-templates/>
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Titulo</th>
      <th style="text-align :left">SALFUMAR</th>
    </tr>
    <xsl:for-each select="recepes/recepe">
      <tr>
        <td><xsl:value-of select="title" /></td>
        <td>
          <a href="otro_archivo.html">SALFUMAR</a>
        </td>
      </tr>
    </xsl:for-each>
  </table>
</xsl:template>
