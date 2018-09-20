import del from 'del';
import gulp from 'gulp';
// import gzip from 'gulp-gzip';
// import runSequence from 'run-sequence';
// import ssh from 'gulp-ssh';
// import { sshConfig, sshPath } from './sshConfig';
// import tar from 'gulp-tar';

// const paths = {
//   build: 'build',
//   remote: sshPath,
//   source: 'source',
// };
// const shellConfig = {
//   ignoreErrors: false,
//   sshConfig: sshConfig,
// };
// const shellInstance = ssh(shellConfig);

// This task will create a new distribution folder and deploy it to the server.
// gulp.task('deploy', (done) => {
//   return runSequence(
//     'deploy:clean',
//     'deploy:compress',
//     'deploy:clean-remote',
//     'deploy:upload',
//     'deploy:extract',
//     done,
//   );
// });

// This deployment helper task deletes the current distribution tarball, if one exists.
gulp.task('deploy:clean', () => del('public.tar.gz'));

// This deployment helper task creates a tarball from the distribution folder.
// gulp.task('deploy:compress', () => {
//   return gulp.src([
//     `${paths.build}/**/*`,
//     `${paths.build}/.htaccess`,
//   ])
//     .pipe(tar('build.tar'))
//     .pipe(gzip())
//     .pipe(gulp.dest('.'));
// });

// This deployment helper task deletes all existing files in the server directory.
// gulp.task('deploy:clean-remote', () => {
//   return shellInstance.shell([
//     `cd ${paths.remote}`,
//     'rm -rf ./*',
//     'rm -rf ./.htaccess',
//   ], {filePath: 'clean-remote-commands.log'})
//     .pipe(gulp.dest('sshLogs'));
// });

// This deployment helper task uploads the distribution tarball to the server directory.
// gulp.task('deploy:upload', () => gulp.src('build.tar.gz').pipe(shellInstance.sftp('write', `${paths.remote}build.tar.gz`)));

// This deployment helper task extracts the distribution tarball to the server directory and then deletes the tarball.
// gulp.task('deploy:extract', () => {
//   return shellInstance.shell([
//     `cd ${paths.remote}`,
//     'gunzip ./build.tar.gz',
//     'tar -xvf ./build.tar --overwrite',
//     'rm ./build.tar'
//   ], {filePath: 'extract-commands.log'})
//     .pipe(gulp.dest('sshLogs'));
// });
