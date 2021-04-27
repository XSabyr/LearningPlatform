CREATE TABLE [dbo].[Section]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [courseId] INT CONSTRAINT [FK_SECTION_COURSE] FOREIGN KEY
        REFERENCES [dbo].[Course]([Id]) ON DELETE CASCADE NOT NULL, 
    [title] NVARCHAR(50) NOT NULL, 
    [content] NVARCHAR(max) NOT NULL, 
    [orderNumber] INT NOT NULL
)
