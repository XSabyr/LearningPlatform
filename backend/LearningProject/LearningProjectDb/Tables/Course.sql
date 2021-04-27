CREATE TABLE [dbo].[Course]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [userId] INT CONSTRAINT [FK_COURSE_USER] FOREIGN KEY
        REFERENCES [dbo].[User]([Id]) NOT NULL, 
    [title] NVARCHAR(500) NOT NULL, 
    [introduction] NVARCHAR(MAX) NOT NULL
)
