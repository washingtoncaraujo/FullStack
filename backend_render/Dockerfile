# Usa a imagem oficial mais recente do Ubuntu como estágio de construção (build)
FROM ubuntu:latest AS build
 
# Atualiza os repositórios do apt-get
RUN apt-get update
 
# Instala o OpenJDK 17 no sistema
RUN apt-get install openjdk-17-jdk -y
 
# Copia todos os arquivos do contexto de construção para o diretório de trabalho no contêiner
COPY . .
 
# Instala o Maven no sistema
RUN apt-get install maven -y
 
# Executa o comando 'mvn clean install' para compilar e empacotar a aplicação
RUN mvn clean install
 
# Usa a imagem oficial do OpenJDK 17 (imagem slim) como estágio final
FROM openjdk:17-jdk-slim
 
# Expõe a porta 8080 do contêiner
EXPOSE 8080
 
# Copia o arquivo JAR compilado do estágio de construção para o diretório raiz do contêiner
COPY --from=build /target/backend_render-0.0.1-SNAPSHOT.jar app.jar
 
# Define o ponto de entrada para a aplicação, executando o comando 'java -jar app.jar'
ENTRYPOINT [ "java", "-jar", "app.jar" ]