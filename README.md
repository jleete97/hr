## hr
HR app - a somewhat generic personal project. Its initial function will be tracking employee reviews.

General structure:

- JEE application, based on Spring Boot, with PostgreSQL, Spring Security, web, REST services
- AngularJS
- Maven build
- PostgreSQL database 

Development environment:

- Eclipse
- Firefox (or Chrome, etc.)
- 5 Terminal windows, arrayed like:

<table>
	<tr>
		<td><b>Deploy as jar</b><br>in target directory<br>java -jar hrapp-0.0.1-SNAPSHOT.jar (or whatever)</td>
		<td><b>Nexus</b><br>in ~/tools/nexus-2.11.2-03<br>bin/nexus start</td>
	</tr>
	<tr>
		<td><b>Database</b><br>in ~/data/hr<br>pg_ctl start -D ~/data/hr &amp;</td>
		<td></td>
	</tr>
	<tr>
		<td><b>Build</b><br>in ~/workspaces/hr/hr<br>mvn package</td>
		<td>Misc editing (e.g., this README)</td>
	</tr>
</table>

More documentation:

[Database](md/dbsetup.md)

[Maven](md/maven.md)
