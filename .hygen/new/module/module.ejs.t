---
to: "src/modules/<%= h.fileName(name) %>/<%= h.moduleFileName(name) %>.ts"
unless_exists: true
---
<%

 ModuleName = h.ModuleName(name);
 fileName = h.inflection.dasherize(name);

 ControllerName = h.ControllerName(name);
 controllerFileName = h.controllerFileName(name);

 ServiceName = h.ServiceName(name);
 serviceFileName = h.serviceFileName(name);

 RepositoryName = h.RepositoryName(name);
 repositoryFileName = h.repositoryFileName(name);

 createCommandFileName = h.createCommandFileName(name);
 getQueryFileName = h.getQueryFileName(name);

%>import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { <%= ControllerName %> } from './<%= controllerFileName %>';
import { <%= RepositoryName %> } from './<%= repositoryFileName %>';
import { <%= ServiceName %> } from './<%= serviceFileName %>';

@Module({
  imports: [TypeOrmModule.forFeature([<%= RepositoryName %>])],
  providers: [<%= ServiceName %>],
  controllers: [<%= ControllerName %>],
})
export class <%= ModuleName %> {}
